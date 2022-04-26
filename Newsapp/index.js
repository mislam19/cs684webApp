import { useEffect, useState } from "react";
import _ from "lodash";

import styles from "../styles/Home.module.scss";
import { BsChevronLeft, BsChevronRight, BsSearch } from "react-icons/bs";

export default function Home() {
  const [articles, setArticles] = useState(null);
  const [userAuth, setUserAuth] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  // searchbar

  const [totalPages, setTotalPages] = useState(0);

  const getArticles = () => {
    var uri = `http://localhost:8080/news`;
    if (getAuth() !== null)
      uri = `http://localhost:8080/news/email/${getAuth().email}`;
    else uri = `http://localhost:8080/news`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(Math.ceil(data.data.totalResults / 10));
        setArticles(data.data.articles);
      });
  };

  const getAuth = () => {
    if (typeof window !== "undefined")
      if (localStorage.getItem("newsAppCred") !== null) {
        var authVar = JSON.parse(localStorage.getItem("newsAppCred"));
        return authVar;
      } else {
        setUserAuth(null);
        return null;
      }
  };

  useEffect(() => {
    getAuth();
    setPageNo(1);
    getArticles();
  }, []);

  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

  function paginate(arr, size) {
    return arr.reduce((acc, val, i) => {
      let idx = Math.floor(i / size);
      let page = acc[idx] || (acc[idx] = []);
      page.push(val);
      return acc;
    }, []);
  }
 
  function handleSearch(e) {
    if (e.length != 0) {
      var uri = `http://localhost:8080/search/${e}`;
      fetch(uri)
        .then((res) => res.json())
        .then((data) => {
          setTotalPages(Math.ceil(data.data.totalResults / 10));
          setArticles(data.data.articles);
        });
    } else {
      getArticles();
    }
  }
 
  return (
    <div className={styles.container}>
      {/*  */}
      <div className={styles.searchbar}>
        <input
          type="search"
          value={searchQuery}
          placeholder="Google OR Dow OR Kardasians"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span
          className={styles.searchButton}
          onClick={() => {
            handleSearch(searchQuery);
          }}
        >
          <BsSearch />
        </span>
      </div>
      {/*  */}
      <div className={styles.articles}>
        {articles !== null &&
          paginate(articles, 10)
            [pageNo - 1].sort((a, b) => {
              var date1 = new Date(a.publishedAt);
              var date2 = new Date(b.publishedAt);
              if (date1.getTime() < date2.getTime()) return 1;
              if (date1.getTime() > date2.getTime()) return -1;
              return 0;
            })
            .map((item, index) => (
              <div className={styles.article} key={index}>
                <h3>{item.title}</h3>
                <span>{`${parseISOString(item.publishedAt).getFullYear()}-${
                  parseISOString(item.publishedAt).getMonth() + 1
                }-${parseISOString(item.publishedAt).getDate()}`}</span>
                <p>{item.description}</p>
              </div>
            ))}
      </div>

      <div className={styles.pagination}>
        <BsChevronLeft className={styles.icon} />
        {_.times(totalPages, (i) => {
          if (i < 20)
            return (
              <span
                key={i}
                className={pageNo == i + 1 && styles.active}
                onClick={() => {
                  setPageNo(i + 1);
                  getArticles(i + 1);
                }}
              >
                {i + 1}
              </span>
            );
        })}
        <BsChevronRight className={styles.icon} />
      </div>
    </div>
  );
}
