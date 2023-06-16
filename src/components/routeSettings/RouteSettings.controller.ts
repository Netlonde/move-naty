import { useState } from "react";

export const RouteSettingsController = () => {
  const [allCheckList, setAllCheckList] = useState<string[]>([]);
  const [checkItem, setCheckItem] = useState<string>("");
  const [editValue, setEditValue] = useState("");

  return { allCheckList, checkItem, setCheckItem, editValue };
};

export default RouteSettingsController;
