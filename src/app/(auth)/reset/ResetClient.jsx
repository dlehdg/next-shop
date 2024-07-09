"use client";

import React, { useState } from "react";
import styles from "./Reset.module.scss";
import Loader from "@/components/loader/Loader";
import Heading from "@/components/heading/Heading";
import Input from "@/components/Input/Input";
import Divider from "@/components/divider/Divider";
import Button from "@/components/button/Button";
import Link from "next/link";

const ResetClient = () => {
  const [email, setemail] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.form}>
            <Heading
              title="비밀번호 업데이트"
              subtitle="이메일 주소를 입력해주세요."
            />

            <form onSubmit={resetPassword}>
              <Input
                email
                icon="letter"
                id="email"
                name="email"
                label="이메일"
                placeholder="아이디(이메일)"
                className={styles.control}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                password
                icon="lock"
                id="password"
                name="password"
                label="비밀번호"
                placeholder="비밀번호"
                className={styles.control}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Input
                password
                icon="lock"
                id="password"
                name="password"
                label="비밀번호 확인"
                placeholder="비밀번호 확인"
                className={styles.control}
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />

              <div className={styles.buttonGroup}>
                {/* Button */}
                <Button type="submit" width="100%">
                  회원가입
                </Button>

                <Divider />

                <Button width="100%" secondary>
                  <Link href={"/login"}>로그인</Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetClient;
