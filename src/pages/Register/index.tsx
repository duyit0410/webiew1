import Input from '@components/atoms/Input';
import Text from '@components/atoms/Text/Txt';
import Container from '@layouts/Container';
import { onChangeInput } from '@util/handle';
import React, { memo, useMemo, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineQuestionCircle, AiOutlineUser } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

interface IData {
  username: string;
  password: string;
  confirmPass: string
}
const defaultData: IData = {
  username: "",
  password: "",
  confirmPass: "",
};
const Register = () => {
  const [data, setData] = useState<IData>(defaultData);
  const [hidePass, setHidePass] = useState(true);

  const _renderInputData = useMemo(
    () => [
      {
        leftIcon: <AiOutlineUser />,
        placeholder: "Nhập tên đăng nhập",
        value: data.username,
        onChange: (e) => onChangeInput(e, "username", data, setData),
      },
      {
        leftIcon: <BiLockAlt />,
        placeholder: "Nhập mật khẩu",
        value: data.password,
        type: hidePass ? "password" : "text",
        onChange: (e) => onChangeInput(e, "password", data, setData),
        rightIcon: (
          <div onClick={() => setHidePass(!hidePass)}>
            {hidePass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        ),
      },
      {
        leftIcon: <BiLockAlt />,
        placeholder: "Xác nhận mật khẩu",
        value: data.confirmPass,
        type: hidePass ? "password" : "text",
        onChange: (e) => onChangeInput(e, "confirmPass", data, setData),
      },
    ],
    [data, hidePass]
  );

  return (

    <>

    <Container>
      <div className="mt-3 h-12 aspect-square rounded-full bg-main mx-auto" />
      {_renderInputData.map((item, i) => (
        <Input key={i} {...item} />
      ))}
    </Container>
    <Text size={20} text={<>Bạn đã có tài khoản? <Link to='/login' className="text-main">Đăng nhập</Link></>} className="py-4 text-center bg-main/10"/>

  </>
  );
};

export default memo(Register);