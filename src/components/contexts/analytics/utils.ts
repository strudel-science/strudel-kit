import { DataFilter } from "./AnalyticsProvider";

export const filterBySearchText = (allData: any[], searchText?: string) => {
  let filteredData = allData;
  if (searchText) {
    filteredData = allData.filter((d) => {
      const rowString = JSON.stringify(d).toLowerCase();
      return rowString.indexOf(searchText.toLowerCase()) > -1;
    });
  }
  return filteredData;
};

export const filterByDataFilters = (allData: any[], filters: DataFilter[]) => {
  let filteredData = allData;
  if (filters.length > 0) {
    filteredData = allData.filter((d) => {
      let include = true;
      /**
       * All filters have to be matched for a row to be included in the filtered data
       */
      filters.forEach((f) => {
        let match = false;
        if (include === true) {
          switch (f.operator) {
            case 'contains': {
              if (d[f.field].indexOf(f.value) > -1) {
                match = true;
              }
              break;
            }
            case 'contains one of': {
              if (Array.isArray(f.value)) {
                f.value.forEach((v) => {
                  if (!match) {
                    if (d[f.field] === v) {
                      match = true;
                    }
                  }
                });
              }
              break;
            }
            default:
              break;
          }
        }
        if (!match) include = false;
      });
      return include;
    });
  }
  return filteredData;
};

export const filterData = (allData: any[], filters: DataFilter[], searchText?: string) => {
  const filteredByText = filterBySearchText(allData, searchText);
  const filteredByTextAndDataFilters = filterByDataFilters(filteredByText, filters);
  return filteredByTextAndDataFilters;
}