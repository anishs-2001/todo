import React, { useEffect, useState } from 'react'
import Task from './Task';
import { TaskPropType } from './types';
import { Card, Container } from 'react-bootstrap';
import style from './styles/index.module.css';
import axios from 'axios';

const TaskList = () => {

    const [tasks, setTasks] = useState<TaskPropType["task"][]>([{
        id: 0,
        title: '',
        status: "complete",
    }]);

    const [filterStatusTasks, setFilterStatusTasks] = useState<TaskPropType["task"][]>(tasks);

    const [status, setStatus] = useState<boolean>(false);

    const [filter, setFilter] = useState<string>("All");

    const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        let taskId: number = parseInt(e.target.value);
        let filtererdTask = tasks.filter((task) => task.id === taskId);
        filtererdTask[0].status = (e.target.checked ? "complete" : "incomplete");

        setTasks((prev) => {
            let toReplaceData = prev.filter((data) => data.id === filtererdTask[0].id);
            let toReplaceIndex = prev.indexOf(toReplaceData[0]);
            prev.splice(toReplaceIndex, 1, filtererdTask[0])
            return [...prev];
        });
    }

    const filterFunction = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === 'All') {
            setFilterStatusTasks(tasks);
            setStatus(false);
        }
        else {
            let filtered = tasks.filter((task) => task.status === e.target.value);
            setFilterStatusTasks(filtered);
            setStatus(true);
        }
    };

    const apiCall = (async () => {
        let axiosRes = await axios
            .get("https://0bd67426-e6a8-49b3-8e59-a5524e33ecf7.mock.pstmn.io/task/offset=10")
            .then((data) => {
                console.log(data)
                setTasks(data.data as TaskPropType['task'][]);
                setFilterStatusTasks(data.data as TaskPropType['task'][])
            })
            .catch((err) => err)
    });

    useEffect(() => {
        apiCall();
    }, [])

    useEffect(() => {
        if (filter !== 'All') {
            setFilterStatusTasks((prev) => (prev.filter((data) => data.status === filter)))
        }
    }, [tasks])

    return (
        <Container fluid>
            <Card className={`m-5 ${style['customCard']}`}>
                <Card.Header>Task for the day
                    <select className='ms-5' onChange={(e) => { filterFunction(e); setFilter(e.target.value) }}>
                        <option selected>All</option>
                        <option value={"complete"}>Complete</option>
                        <option value={"incomplete"}>Incomplete</option>
                    </select>
                </Card.Header>
                <Card.Body>{!status ? tasks.map((task) => <Task task={task} changeStatus={changeStatus} />)
                    : filterStatusTasks.map((task) => <Task task={task} changeStatus={changeStatus} />)}
                </Card.Body>
                <Card.Footer>That's for the day</Card.Footer>
            </Card>
        </Container>
    )
}

export default TaskList;
