import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut
          debitis sequi vitae alias cum dolor obcaecati, ratione nostrum
          repellendus numquam distinctio rerum, harum iste vero dolorem quia ad
          et fuga officia vel repellat sapiente iusto nulla. Alias corrupti id
          aliquam et! Optio quos officiis harum sapiente eligendi deleniti ab.
          Animi amet fugiat, cum obcaecati non molestias illo et nemo porro
          dignissimos reprehenderit ipsum perspiciatis laboriosam quisquam.
          Harum in cumque, autem, tempora ullam alias illum dicta inventore quam
          ex totam adipisci, excepturi ut quo deserunt perferendis laboriosam
          beatae. Eius autem deleniti reiciendis distinctio unde alias in magni
          praesentium neque voluptatem temporibus pariatur eos totam atque iusto
          nostrum, rerum tenetur molestias qui modi labore dolores veniam
          debitis. Quo quam aut voluptatum id, dolore odit quia aliquam, minus
          at et nisi, sapiente veniam. Quisquam, quia mollitia. Eaque deleniti
          alias expedita ad perspiciatis, ea placeat veritatis. Quo facilis ex,
          iste et nobis iusto.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut
          debitis sequi vitae alias cum dolor obcaecati, ratione nostrum
          repellendus numquam distinctio rerum, harum iste vero dolorem quia ad
          et fuga officia vel repellat sapiente iusto nulla. Alias corrupti id
          aliquam et! Optio quos officiis harum sapiente eligendi deleniti ab.
          Animi amet fugiat, cum obcaecati non molestias illo et nemo porro
          dignissimos reprehenderit ipsum perspiciatis laboriosam quisquam.
          Harum in cumque, autem, tempora ullam alias illum dicta inventore quam
          ex totam adipisci, excepturi ut quo deserunt perferendis laboriosam
          beatae. Eius autem deleniti reiciendis distinctio unde alias in magni
          praesentium neque voluptatem temporibus pariatur eos totam atque iusto
          nostrum, rerum tenetur molestias qui modi labore dolores veniam
          debitis. Quo quam aut voluptatum id, dolore odit quia aliquam, minus
          at et nisi, sapiente veniam. Quisquam, quia mollitia. Eaque deleniti
          alias expedita ad perspiciatis, ea placeat veritatis. Quo facilis ex,
          iste et nobis iusto.
        </p>
        <Link href="/jedis">
          <a className={styles.btn}>See ninjas listing</a>
        </Link>
      </div>
    </>
  );
}
