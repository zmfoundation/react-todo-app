import React from 'react';

const Task = ( { tasksList, deleteTask } ) => {
	return (
		<div className="app-ui">
			{
				tasksList.map( singleTask => {
					return(
						<p key={ singleTask.id }><input type="checkbox" onClick={ () => { deleteTask(singleTask.id) } } /> { singleTask.name } </p>
					)	
				} )
			}
		</div>
	);

}

export default Task; 