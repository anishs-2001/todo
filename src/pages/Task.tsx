import { TaskComponentPropType } from './types';
import style from "./styles/index.module.css"
import { Card, Form } from 'react-bootstrap';
import styles from "../../src/components/Nav.module.css"
import { useContext, useState } from 'react';
import { Theme } from '../components/themeContext/ThemeContext';

const Task = ({ task, changeStatus }: TaskComponentPropType) => {
    const { theme } = useContext(Theme);

    return (
        <Card className={`m-3 p-3 {${theme ? styles.light : styles.dark}`}>
            <Form>
                <Form.Check
                    label={task.title}
                    checked={task.status === "complete" ? true : false}
                    onChange={changeStatus}
                    value={task.id} />
            </Form>
        </Card >
    )
}

export default Task
