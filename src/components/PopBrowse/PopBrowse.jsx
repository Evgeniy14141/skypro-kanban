import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { appRoutes } from "../../lib/appRouts";
import * as S from "./PopBrowse.styled";
import { useUser } from "../hooks/userUser";
import { deleteTask, editTask, getTodos } from "../../api";
import { useEffect, useState } from "react";
import { useTasks } from "../../components/hooks/userTusk";
import { categoryColors } from "../../colors";
import { statusList } from "../Main/Main";

const PopBrowse = () => {
  const { id } = useParams();
  const { userData } = useUser();
  const { tasks, setTasks } = useTasks();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const foundTask = tasks.find((e) => e._id === id);
  const [changeTask, setChangeTask] = useState({
    title: "",
    topic: "",
    status: "",
    description: "",
    date: new Date(),
  });

  useEffect(() => {
    if (foundTask) {
      setChangeTask(foundTask);
      return setIsStatus(foundTask.status);
    }
    getTodos({ token: userData.token }).then((res) => {
      const task = res.tasks.find((e) => e._id === id);
      setChangeTask(task);
    });
  }, [foundTask]);

  const themeColor = foundTask ? categoryColors[foundTask.topic] : "";

  const handleStatusClick = (status) => {
    setChangeTask((prevTask) => ({ ...prevTask, status }));
    setIsStatus(status);
  };

  const editMode = () => {
    setIsEdit((prevState) => !prevState);
  };

  const handleDeleteTask = async () => {
    setIsDeleting(true);

    try {
      const response = await deleteTask({
        id: id,
        token: userData.token,
      });

      console.log("DELETE RESPONSE", response);

      setError(null);
      setTasks(response.tasks);
      navigate(appRoutes.MAIN);
    } catch (error) {
      setError("Ошибка удаления задачи");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEditTask = async () => {
    setIsSaving(true);

    try {
      const response = await editTask({
        id: changeTask._id,
        token: userData.token,
        title: changeTask.title,
        topic: changeTask.topic,
        status: changeTask.status,
        description: changeTask.description,
        date: changeTask.date,
      });

      console.log("EDIT RESPONSE", response);
      setTasks(response.tasks);
      setError(null);
      setIsEdit(false);
      navigate(appRoutes.MAIN);
    } catch (error) {
      setError("Ошибка редактирования задачи");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>{changeTask?.title}</S.PopBrowseTitle>
              <S.CategoriesTheme $isActive={true} $theme={themeColor}>
                <S.CategoriesThemeText $theme={themeColor}>
                  {changeTask?.topic}
                </S.CategoriesThemeText>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>

            <S.Status>
              <S.StatusText>Статус</S.StatusText>
              <S.StatusThemes>
                {!isEdit && (
                  <S.StatusTheme $highlighted>
                    <S.StatusThemeText>{changeTask?.status}</S.StatusThemeText>
                  </S.StatusTheme>
                )}
                {isEdit &&
                  statusList.map((status) => (
                    <S.StatusTheme
                      key={status}
                      $isChecked={status === isStatus}
                      onClick={() => handleStatusClick(status)}
                    >
                      <S.StatusThemeText>{status}</S.StatusThemeText>
                    </S.StatusTheme>
                  ))}
              </S.StatusThemes>
            </S.Status>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.LabelSubtitle htmlFor="textArea01">
                    Описание задачи
                  </S.LabelSubtitle>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly={!isEdit}
                    placeholder="Введите описание задачи..."
                    value={changeTask?.description}
                    onChange={(e) =>
                      setChangeTask({
                        ...changeTask,
                        description: e.target.value,
                      })
                    }
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              {!isEdit && <Calendar selected={changeTask?.date} />}
              {isEdit && (
                <Calendar
                  selected={new Date(changeTask?.date)}
                  setSelected={(date) => setChangeTask({ ...changeTask, date })}
                />
              )}
            </S.PopBrowseWrap>
            <S.ThemeDownDown>
              <S.CategoriesText>Категория</S.CategoriesText>
              <S.CategoriesTheme $isActive={true} $theme={themeColor}>
                <S.CategoriesThemeText $theme={themeColor}>
                  {changeTask?.topic}
                </S.CategoriesThemeText>
              </S.CategoriesTheme>
            </S.ThemeDownDown>

            {!isEdit && (
              <S.PopBrowseButtonBrowse>
                <S.ButtonGroup>
                  <S.ButtonLink>
                    <S.ButtonEdit onClick={editMode}>
                      Редактировать задачу
                    </S.ButtonEdit>
                  </S.ButtonLink>
                  <S.ButtonLink>
                    {!isDeleting && (
                      <S.ButtonDelete onClick={handleDeleteTask}>
                        Удалить задачу
                      </S.ButtonDelete>
                    )}
                    {isDeleting && (
                      <S.ButtonDelete disabled>
                        Удаление задачи...
                      </S.ButtonDelete>
                    )}
                  </S.ButtonLink>
                  {!error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                </S.ButtonGroup>
                <S.ButtonLinkClose to={appRoutes.MAIN}>
                  <S.ButtonClose>Закрыть</S.ButtonClose>
                </S.ButtonLinkClose>
              </S.PopBrowseButtonBrowse>
            )}
            {isEdit && (
              <S.PopBrowseButtonEdit>
                <S.ButtonGroup>
                  <S.ButtonLinkSave>
                    {!isSaving && (
                      <S.ButtonSave onClick={handleEditTask}>
                        Сохранить
                      </S.ButtonSave>
                    )}
                    {isSaving && <S.ButtonSave>Сохранение...</S.ButtonSave>}
                  </S.ButtonLinkSave>
                  <S.ButtonLinkCancel>
                    <S.ButtonCancel onClick={editMode}>Отменить</S.ButtonCancel>
                  </S.ButtonLinkCancel>
                  <S.ButtonLink>
                    {!isDeleting && (
                      <S.ButtonDelete onClick={handleDeleteTask}>
                        Удалить задачу
                      </S.ButtonDelete>
                    )}
                    {isDeleting && (
                      <S.ButtonDelete disabled>
                        Удаление задачи...
                      </S.ButtonDelete>
                    )}
                  </S.ButtonLink>
                </S.ButtonGroup>
                <S.ButtonLinkClose to={appRoutes.MAIN}>
                  <S.ButtonClose>Закрыть</S.ButtonClose>
                </S.ButtonLinkClose>
              </S.PopBrowseButtonEdit>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};
export default PopBrowse;
