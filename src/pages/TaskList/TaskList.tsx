import Task from '../Task';
import { Card, Container, Pagination } from 'react-bootstrap';
import style from '../styles/index.module.css';

const TaskList = ({ filterFunction, status, tasks, changeStatus, filterStatusTasks, setFilter, prevPage, nextPage, offset }: any) => {
    return (
        <Container fluid className={`${style.cardContainer}`}>
            <Card className={`m-5 ${style['customCard']}`}>
                <Card.Header>Task for the day
                    <select className='ms-5' onChange={(e) => { filterFunction(e); setFilter(e.target.value) }}>
                        <option selected>All</option>
                        <option value={"complete"}>Complete</option>
                        <option value={"incomplete"}>Incomplete</option>
                    </select>
                </Card.Header>
                <Card.Body>{!status ? tasks.map((task: any) => <Task task={task} changeStatus={changeStatus} />)
                    : filterStatusTasks.map((task: any) => <Task task={task} changeStatus={changeStatus} />)}
                </Card.Body>
                <Card.Footer>
                    That's for the day
                    <Pagination>
                        <Pagination.Prev onClick={prevPage} disabled={offset === 10 ? true : false}></Pagination.Prev>
                        <Pagination.Next onClick={nextPage} disabled={offset === 40 ? true : false}></Pagination.Next>
                    </Pagination>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default TaskList;
