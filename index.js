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
  