type QueryParams = { [key: string]: string };

function useQueryParams(): QueryParams {
  const queryParams: QueryParams = {};

  // Get the current URL
  const url = window.location.href;

  // Create a URL object
  const urlObj = new URL(url);

  // Extract search parameters to URLSearchParams object
  const params = new URLSearchParams(urlObj.search);

  // Convert the URLSearchParams to an object
  params.forEach((value, key) => {
    queryParams[key] = value;
  });

  return queryParams;
}

export default useQueryParams;