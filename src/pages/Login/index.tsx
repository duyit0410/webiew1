import { login } from "@api";
import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon/Icon";
import Input from "@components/atoms/Input";
import Txt from "@components/atoms/Text/Txt";
import NotiText from "@components/atoms/Text/NotiText";
import { useAppDispatch } from "@hooks/useRedux";
import Container from "@layouts/Container";
import { handleModalError } from "@redux/ModalSlice";
import { onChangeInput } from "@util/handle";
import React, { memo, useCallback, useMemo, useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineQuestionCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const defaultData: IPostUser = {
  username: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [data, setData] = useState<IPostUser>(defaultData);
  const [hidePass, setHidePass] = useState(true);
  const [err, setErr] = useState("");

  const onErr = useCallback(
    (text: string) =>
      dispatch(
        handleModalError({
          visible: true,
          text,
        })
      ),
    []
  );

  const onLogin = useCallback(async () => {
    if (!data.password || !data.username)
      return setErr("Please enter full field");
    const res = await login({ ...data });
    if (res.success) {
      localStorage.setItem("token", res.data.token);
    } else {
      onErr(res.data.message);
    }
    navigate(-1);
  }, [data]);

  const inputData = useMemo(
    () => [
      {
        leftIcon: <AiOutlineUser />,
        placeholder: "Nhập username",
        value: data.username,
        onChange: (e) => onChangeInput(e, "username", data, setData),
      },
      {
        leftIcon: <BiLockAlt />,
        placeholder: "Nhập password",
        value: data.password,
        type: hidePass ? "password" : "text",
        onChange: (e) => onChangeInput(e, "password", data, setData),
        rightIcon: (
          <div onClick={() => setHidePass(!hidePass)}>
            {hidePass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        ),
      },
    ],
    [data, hidePass]
  );

  return (
    <>

      <Container>
        <div className="mt-3 h-12 aspect-square rounded-full bg-main mx-auto" />
        {inputData.map((item, i) => (
          <Input key={i} {...item} />
        ))}
        <Link to="/">
          <Txt
            text="Quên mật khẩu?"
            className="text-main mt-3 text-end underline"
          />
        </Link>
        {err && <NotiText text={err} />}
        <Button
          className="w-full mt-4 uppercase"
          children="Đăng nhập"
          onClick={onLogin}
        />
      
         <Button
         bgColor
          className="w-full mt-4  flex gap-2 justify-center items-center bg-red"
          onClick={onLogin}
        >
        <Icon className="icon-google"/>
         <Txt text='Đăng nhập với google'/>
        </Button>
      </Container>
      <Txt
        size={20}
        text={
          <>
            Bạn chưa có tài khoản?
            <Link to="/register" className="text-main">
              Đăng ký
            </Link>
          </>
        }
        className="py-4 text-center bg-main/10"
      />
    </>
  );
};

export default memo(Login);
