import { useRouter } from "next/router";
import React, { useRef } from "react";

type Data = {
  email: string;
  password: string;
};

export default function Login() {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = ref.current;
    if (form) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("email", data.email);
          router.push("/dashboard");
        });
    }
  };

  return (
    <div>
      <h1 className="mb-4">Login</h1>
      <form
        className="rounded-lg bg-gray-100 p-4 shadow-md"
        onSubmit={handleSubmit}
        ref={ref}
      >
        <div className="p-2 mb-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded-lg bg-blue-100 p-2 ml-2"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="p-2 mb-2">
          <label htmlFor="password">Password</label>
          <input
            className="rounded-lg bg-blue-100 p-2 ml-2"
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <button className="rounded-lg bg-blue-400 p-2 mr-2">Login</button>
      </form>
    </div>
  );
}
