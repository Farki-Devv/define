// types.ts
type TaskType = {
	id: string
	type: string
	title: string
}

type BoardData = {
	backlog: TaskType[]
	inProgress: TaskType[]
}

// TrelloBoard.tsx
import { Card, CardContent } from '@/components/ui/card'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import React, { useState } from 'react'
// this file returns us a trelloBoard to change the array
const TrelloBoard: React.FC = () => {
	const [data, setData] = useState<BoardData>({
		backlog: [
			{
				id: 'task-1',
				type: 'Mobile',
				title: 'Design Dashboard for Energy Consumption Tracking',
			},
			{
				id: 'task-2',
				type: 'Mobile',
				title: 'Develop a User Profile Management Interface',
			},
			{
				id: 'task-3',
				type: 'Website',
				title: 'Design a Landing Page for the EcoTech Homepage',
			},
		],
		inProgress: [
			{
				id: 'task-4',
				type: 'Website',
				title: 'Design an Interactive FAQ Section for the Website',
			},
		],
	})

	const handleDragEnd = (result: any) => {
		const { source, destination } = result

		if (!destination) return

		if (source.droppableId === destination.droppableId) {
			// Moving within the same list
			const items = Array.from(data[source.droppableId as keyof BoardData])
			const [removed] = items.splice(source.index, 1)
			items.splice(destination.index, 0, removed)

			setData({
				...data,
				[source.droppableId]: items,
			})
		} else {
			// Moving between lists
			const sourceItems = Array.from(
				data[source.droppableId as keyof BoardData]
			)
			const destItems = Array.from(
				data[destination.droppableId as keyof BoardData]
			)
			const [removed] = sourceItems.splice(source.index, 1)
			destItems.splice(destination.index, 0, removed)

			setData({
				...data,
				[source.droppableId]: sourceItems,
				[destination.droppableId]: destItems,
			})
		}
	}

	const TaskList: React.FC<{
		tasks: TaskType[]
		droppableId: string
	}> = ({ tasks, droppableId }) => {
		return (
			<Droppable droppableId={droppableId}>
				{(provided, snapshot) => (
					<div
						{...provided.droppableProps}
						ref={provided.innerRef}
						className={`space-y-1 min-h-[12.5rem] rounded-lg transition-colors ${
							snapshot.isDraggingOver ? 'bg-gray-100' : ''
						}`}
					>
						{tasks.length === 0 && !snapshot.isDraggingOver && (
							<div className='h-[3.938rem] w-full text-xs bg-zinc-200 rounded-lg flex items-center justify-center text-gray-400'>
								Drop here
							</div>
						)}

						{tasks.map((task, index) => (
							<Draggable key={task.id} draggableId={task.id} index={index}>
								{(provided, snapshot) => (
									<Card
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										className={`bg-[#FAFAFA] border-none shadow-md ${
											snapshot.isDragging ? 'shadow-lg' : ''
										}`}
									>
										<CardContent className='px-2 py-1.5 w-[11.625rem] h-[3.938rem] hover:scale-105 transition-all'>
											<div className='font-normal text-[0.625rem] text-[#A1A1AA] '>
												{task.type}
											</div>
											<div className='text-xs font-medium'>{task.title}</div>
										</CardContent>
									</Card>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		)
	}

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<div className='flex gap-[8px]'>
				{/* Backlog Column */}
				<div className='w-full'>
					<h2 className='flex items-center gap-2 mb-2 px-1.5'>
						<span className='size-[5px] rounded-full bg-red-500'></span>
						<span className='font-medium text-[9px] text-[#A1A1AA]'>
							Backlog
						</span>
					</h2>
					<TaskList tasks={data.backlog} droppableId='backlog' />
				</div>

				{/* In Progress Column */}
				<div className='w-full'>
					<h2 className='flex items-center gap-2 mb-2'>
						<span className='size-[5px] rounded-full bg-orange-500'></span>
						<span className='font-medium text-[9px] text-[#A1A1AA]'>
							In Progress
						</span>
					</h2>
					<TaskList tasks={data.inProgress} droppableId='inProgress' />
				</div>
			</div>
		</DragDropContext>
	)
}

export default TrelloBoard
