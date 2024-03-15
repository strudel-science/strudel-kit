import * as d3 from 'd3-fetch';

export const getDataFromSource = (dataSource: string, basename: string): any => {
  return new Promise(async (resolve) => {
    const fileExtension = dataSource.split('.').pop();
    const isExternal = dataSource.startsWith('http');
    const dataSourcePath = isExternal ? dataSource : `${basename}/data/${dataSource}`;
    let data: any = [];
    if (fileExtension === 'csv') {
      data = await d3.csv(dataSourcePath);
    } else if (fileExtension === 'tsv') {
      data = await d3.tsv(dataSourcePath);
    } else if (fileExtension === 'json') {
      data = await d3.json(dataSourcePath);
    } else if (isExternal) {
      data = await d3.json(dataSourcePath);
    }
    resolve(data);
  })
}