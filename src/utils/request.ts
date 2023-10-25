export const iconContent = new Map<string, string>();
const requests = new Map<string, Promise<any>>();

export const getSvgContent = (url: string) => {
  let req = requests.get(url);
  if (!req) {
    let [reqURL] = url.split(',');
    req = fetch(reqURL).then(rsp => {
      if (rsp.ok) {
        return rsp.text().then(svgContent => {
          iconContent.set(url, svgContent || '');
        });
      }
      iconContent.set(url, '');
    });

    requests.set(url, req);
  }

  return req;
};
