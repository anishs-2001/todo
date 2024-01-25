import React from 'react'
import { useEffect, useState } from 'react'
import { TaskPropType } from '../types';
import axios from 'axios';
import TaskList from './TaskList';

const TaskListHandler = () => {

    const [tasks, setTasks] = useState<TaskPropType["task"][]>([{
        id: 0,
        title: '',
        status: "complete",
    }]);

    const [filterStatusTasks, setFilterStatusTasks] = useState<TaskPropType["task"][]>(tasks);

    const [status, setStatus] = useState<boolean>(false);

    const [filter, setFilter] = useState<string>("All");

    const [offset, setOffset] = useState<number>(10)

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

    const prevPage = () => {
        setOffset((prev) => prev - 10)
    }

    const nextPage = () => {
        setOffset((prev) => prev + 10)
    }

    const apiCall = (async () => {
        let axiosRes = await axios
            .get(`https://0bd67426-e6a8-49b3-8e59-a5524e33ecf7.mock.pstmn.io/task/offset=${offset}`)
            .then((data) => {
                console.log(data)
                setTasks(data.data as TaskPropType['task'][]);
                setFilterStatusTasks(data.data as TaskPropType['task'][])
            })
            .catch((err) => err)
    });

    useEffect(() => {
        apiCall();
    }, [offset])

    useEffect(() => {
        if (filter !== 'All') {
            setFilterStatusTasks((prev) => (prev.filter((data) => data.status === filter)))
        }
    }, [tasks])
    return (
        <TaskList
            filterFunction={filterFunction}
            status={status}
            tasks={tasks}
            changeStatus={changeStatus}
            filterStatusTasks={filterStatusTasks}
            setFilter={setFilter}
            prevPage={prevPage}
            nextPage={nextPage}
            offset={offset}
        />
    )
}

export default TaskListHandler
