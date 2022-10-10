import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { GrFormAdd } from 'react-icons/gr';
import { FiTrash } from 'react-icons/fi';
import { useState } from 'react';
import styles from './Form.module.css'

export default function Form() {
    
    const [task, setTasks] = useState('')

    const [taskList, setTasksList] = useState([])
   
    const handleSubmit = (e) => {
        e.preventDefault()
        setTasksList([task].concat(taskList))
        console.log(task)
        setTasks('')
    }

    const handleDelete = (indice) => {
        const newList = [...taskList]
        newList.splice(indice, 1)
        setTasksList(newList)
    }
    
  return (
    <>
        <h1>Lista de Tarefas</h1>
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic"
                    label="Digite sua tarefa"
                    variant="outlined" 
                    onChange={(e) => setTasks(e.target.value)}/>
            </form>

            <Button variant="contained" onClick={handleSubmit}>Adicionar <GrFormAdd size={25}/></Button>
        
        </div>

        <div className={styles.list}>
            {taskList.map((t, index) => 
                <p key={index}>
                    {t}
                    <span>
                        <Button variant='contained' color='error' onClick={handleDelete}>DELETAR <FiTrash size={25}/></Button>
                    </span>
                </p>
            )}
        </div>
    </>
  );
}
