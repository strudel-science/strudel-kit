import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/queryParams.utils';

interface DetailQueryConfig {
  dataSource: string;
  dataIdField: string;
  paramId?: string;
  queryMode: 'server' | 'client';
  staticParams: Record<string, string> | null | undefined;
}

/**
 * Helper hook that wraps around the useQuery hook and fetches a
 * single detail item based on the config options supplied.
 */
export const useDetailQuery = (queryConfig: DetailQueryConfig): any => {
  let queryParams = { ...queryConfig.staticParams };
  const queryString = new URLSearchParams(queryParams).toString();
  let queryFn;
  if (queryConfig.queryMode === 'server') {
    queryFn = async (): Promise<any> => {
      const response = await fetch(
        `${queryConfig.dataSource}/${queryConfig.paramId}?${queryString}`
      );
      return response.json();
    };
  } else if (queryConfig.queryMode === 'client') {
    queryFn = async (): Promise<any> => {
      const results = await fetchData(queryConfig.dataSource);
      return results?.find((d: any) => {
        if (queryConfig.paramId) {
          return (
            d[queryConfig.dataIdField].toString() ===
            queryConfig.paramId.toString()
          );
        }
      });
    };
  }

  // Define query for this page and fetch data item
  const { isPending, isFetching, isError, data, error } = useQuery({
    queryKey: [queryConfig.dataSource, queryConfig.paramId],
    queryFn,
  });
  return { isPending, isFetching, isError, data, error };
};
