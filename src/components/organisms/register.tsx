"use client";

import Input from "@/components/atoms/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FC } from "react";

type Props = { setUser: (data: any) => void };

const Register: FC<Props> = ({ setUser }) => {
	const { values, setFieldValue, submitForm, errors } = useFormik({
		initialValues: {
			username: "",
			email: "",
			name: "",
			surname: "",
			password: "",
		},
		validationSchema: Yup.object({
			username: Yup.string().required("Kullanıcı adı zorunludur."),
			email: Yup.string()
				.email("Geçersiz eposta adresi.")
				.required("Eposta adresi zorunludur."),
			name: Yup.string().required("Ad zorunludur."),
			surname: Yup.string().required("Soyad zorunludur."),
			password: Yup.string()
				.min(6, "Şifre en az 6 karakter olmalıdır.")
				.max(16, "Şifre en fazla 16 karakter olabilir.")
				.required("Şifre zorunludur."),
		}),
		onSubmit: async (values) => {
			console.log(values);
			const response = await axios.post(
				"https://support.akbolat.net/api/auth/local/register",
				{
					username: values.username,
					email: values.email,
					password: values.password,
				}
			);

			if (response.status === 200) {
				localStorage.setItem("token", response.data.jwt);
				localStorage.setItem(
					"user",
					JSON.stringify(response.data.user)
				);
				setUser(response.data.user);
			} else {
				alert("Kayıt başarısız. Lütfen tekrar deneyiniz.");
			}
		},
	});

	return (
		<>
			<>
				<Input
					value={values.username}
					setValue={(text) => setFieldValue("username", text)}
					borderBottom
					label="Kullanıcı Adı"
					sm
					placeholder="Kullanıcı adınızı giriniz"
					error={errors.username}
				/>
				<Input
					value={values.email}
					setValue={(text) => setFieldValue("email", text)}
					borderBottom
					label="Eposta Adresi"
					sm
					placeholder="Eposta Adresinizi giriniz"
					error={errors.email}
				/>

				<Input
					value={values.name}
					setValue={(text) => setFieldValue("name", text)}
					borderBottom
					label="Adınız"
					sm
					placeholder="Adınız giriniz"
					error={errors.name}
				/>

				<Input
					value={values.surname}
					setValue={(text) => setFieldValue("surname", text)}
					borderBottom
					label="Soyadınız"
					sm
					placeholder="Soyadınız giriniz"
					error={errors.surname}
				/>

				<Input
					value={values.password}
					setValue={(text) => setFieldValue("password", text)}
					borderBottom
					label="Şifre"
					security
					sm
					placeholder="Şifre giriniz"
					error={errors.password}
				/>
				<div onClick={submitForm}>Gönder</div>
			</>
		</>
	);
};

export default Register;
