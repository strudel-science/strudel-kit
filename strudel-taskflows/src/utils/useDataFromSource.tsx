import * as d3 from 'd3-fetch';
import { useAppState } from '../context/ContextProvider';
import { useEffect, useState } from 'react';
import { openApiModal } from '../context/actions';

/**
 * Get data from a local source or REST API.
 * Include the local basename if pulling from a local source.
 */
export const useDataFromSource = (dataSource: string): any => {
  const { dispatch } = useAppState();
  const [data, setData] = useState();
  /** Get the base portion of the URL. Will be blank when running locally. */
  const base = document.querySelector('base')?.getAttribute('href') ?? '';
  /** 
   * Use the VITE_BASE_URL env variable to specify a path prefix that 
   * should be added to routes and local requests
   */
  const basename = base + import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      const fileExtension = dataSource.split('.').pop();
      const isExternal = dataSource.startsWith('http');
      const dataSourcePath = isExternal ? dataSource : `${basename}/data/${dataSource}`;
      let data: any = [];
      if (fileExtension === 'csv') {
        data = await d3.csv(dataSourcePath);
      } else if (fileExtension === 'tsv') {
        data = await d3.tsv(dataSourcePath);
      } else if (fileExtension === 'json' || isExternal) {
        let headers = new Headers();
        const apiTokenName = localStorage.getItem('apiTokenName');
        const apiTokenValue = localStorage.getItem('apiTokenValue');
        if (apiTokenName && apiTokenValue) {
          headers = new Headers({
            [apiTokenName]: apiTokenValue,
          });
        }
        try {
          const response = await fetch(dataSourcePath, {
            headers: headers,
            method: 'GET',
            redirect: 'follow',
          });
          if (!response.ok) {
            console.log(response);
            dispatch(openApiModal());
            throw new Error("unable to fetch");
          }
          data = await response.json();
        } catch (e) {
          console.log(e);
        }
      }
      setData(data);
    }
    fetchData();
  }, []);

  return data;
}