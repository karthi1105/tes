import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        {/* Search form */}
        <div className="widget widget_search">
          <form className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit" className="search-submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        {/* Popular posts */}
        <div className="widget widget_posts_thumb">
          <h3 className="widget-title">Popular posts</h3>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{
                  backgroundImage: `url(/images/blog/blog1.jpg)`,
                }}
              ></span>
            </Link>
            <div className="info">
              <time>March 15, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  The Best Marketing top use Management Tools
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{
                  backgroundImage: `url(/images/blog/blog2.jpg)`,
                }}
              ></span>
            </Link>
            <div className="info">
              <time>March 16, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  Top 21 Must-Read Blogs For Creative Agencies
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{
                  backgroundImage: `url(/images/blog/blog3.jpg)`,
                }}
              ></span>
            </Link>
            <div className="info">
              <time>March 17, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  Protect your workplace from cyber attacks
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </div>

        {/* Recent posts */}
        <div className="widget widget_recent_entries">
          <h3 className="widget-title">Recent posts</h3>

          <ul>
            <li>
              <Link href="/blog/details">
                The security risks of changing package owners
              </Link>
              <span className="post-date">March 15, 2023</span>
            </li>
            <li>
              <Link href="/blog/details">
                Tips to protecting business and Family
              </Link>
              <span className="post-date">March 16, 2023</span>
            </li>
            <li>
              <Link href="/blog/details">
                Protect your workplace from cyber attacks
              </Link>
              <span className="post-date">March 17, 2023</span>
            </li>
            <li>
              <Link href="/blog/details">
                Business debit Fees to increase in 2023
              </Link>
              <span className="post-date">March 18, 2023</span>
            </li>
            <li>
              <Link href="/blog/details">
                10 tips to reduce your card processing costs
              </Link>
              <span className="post-date">March 19, 2023</span>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="#">Business</Link>
            </li>
            <li>
              <Link href="#">Privacy</Link>
            </li>
            <li>
              <Link href="#">Technology</Link>
            </li>
            <li>
              <Link href="#">Tips</Link>
            </li>
            <li>
              <Link href="#">Uncategorized</Link>
            </li>
          </ul>
        </div>

        {/* Tags */}
        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="#">
              IT <span className="tag-link-count">(3)</span>
            </Link>

            <Link href="#">
              React <span className="tag-link-count">(3)</span>
            </Link>

            <Link href="#">
              Games <span className="tag-link-count">(2)</span>
            </Link>

            <Link href="#">
              Development <span className="tag-link-count">(2)</span>
            </Link>

            <Link href="#">
              Design <span className="tag-link-count">(1)</span>
            </Link>

            <Link href="#">
              Apps <span className="tag-link-count">(1)</span>
            </Link>

            <Link href="#">
              Marketing <span className="tag-link-count">(1)</span>
            </Link>

            <Link href="#">
              Tips <span className="tag-link-count">(2)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
