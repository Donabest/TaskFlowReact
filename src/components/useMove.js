import { useNavigate } from "react-router-dom";

export function useMove() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/AddNewTask");
  }
  return handleClick;
}
