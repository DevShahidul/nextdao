import Image from "next/image";
import React from "react";
import blog_thumb1 from "../../../public/images/blog_thumb1.png";
import styles from "./Blog-section.module.css";

const BlogSection = () => {
  return (
    <section className={styles.blog_section}>
      <div className="container">
        <div className={`d-flex ${styles.content_row}`}>
          <div className={styles.content}>
            <h2>One Bloc, Everyday, Forever.</h2>
            <div className={`mobile_view ${styles.content_thumb}`}>
              <Image
                src={blog_thumb1}
                width={460}
                height={482}
                alt="blog thumb"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quisque non tellus orci ac auctor. Dapibus ultrices in iaculis
              nunc sed augue lacus viverra vitae. Maecenas accumsan lacus vel
              facilisis volutpat est velit egestas. Sit amet porttitor eget
              dolor morbi quis.
            </p>
            <p>
              Quisque non tellus orci ac auctor. Dapibus ultrices in iaculis
              nunc sed <a href="#">augue lacus viverra</a> vitae.
            </p>
          </div>
          <div className={`desktop_view ${styles.content_thumb}`}>
            <Image
              src={blog_thumb1}
              width={460}
              height={482}
              alt="blog thumb"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
