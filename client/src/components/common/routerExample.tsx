import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Introduce: React.FC = () => {
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate("/edit");
  }

  
  return (
    <div>
      <Button onClick={goToEdit}>회원가입</Button>
    </div>
  );
}

export default Introduce;