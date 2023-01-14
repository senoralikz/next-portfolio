import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  // check res for error
  // console.log("this is the entire res:", res);
  // if (!res.ok) {
  //   console.log("error with res:", res);
  //   console.log("this is the error:", res.statusText);
  // } else {
  //   console.log("res is okay:", res);
  // }

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  // console.log("fetching pageInfo:", pageInfo);

  return pageInfo;
};
