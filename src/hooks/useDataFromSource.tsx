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
  const basePath = import.meta.env.VITE_BASE_URL || '';
  const basename = base + basePath;

  useEffect(() => {
    const fetchData = async () => {
      const fileExtension = dataSource.split('.').pop();
      const isExternal = dataSource.startsWith('http');
      const dataSourcePath = isExternal
        ? dataSource
        : `${basename}/${dataSource}`;
      let newData: any = [];
      if (fileExtension === 'csv') {
        newData = await d3.csv(dataSourcePath);
      } else if (fileExtension === 'tsv') {
        newData = await d3.tsv(dataSourcePath);
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
            dispatch(openApiModal());
            throw new Error('unable to fetch');
          }
          newData = await response.json();
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        }
      }
      setData(newData);
    };
    fetchData();
  }, []);

  return data;
};
