import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import _ from "lodash";

const index = () => {
  const router = useRouter();
  const { category } = router.query;
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [articles, setArticles] = useState(null);

  const getArticles = (_pageNo) => {
    const uri = `http://localhost:8080/news/${category}?pageNo=${_pageNo}`;

    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(Math.ceil(data.data.totalResults / 10));
        setArticles(data.data.articles);
      });
  };

  useEffect(() => {
  
    setPageNo(1);
    getArticles(1);
  }, [category]);

  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

  return (
    <div className={styles.container}>
      <div className={styles.articles}>
        {articles !== null &&
          articles.map((item, index) => (
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
        {_.times(totalPages, (i) => (
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
        ))}
        <BsChevronRight className={styles.icon} />
      </div>
    </div>
  );
};

export default index;
