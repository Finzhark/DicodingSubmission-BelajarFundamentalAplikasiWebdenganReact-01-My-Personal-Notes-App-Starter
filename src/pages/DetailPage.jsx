import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link, useNavigate, useParams } from 'react-router-dom';
import DetailPageAction from '../components/DetailPageAction';
import DetailPageBody from '../components/DetailPageBody';
import { 
	archiveNote, 
	unarchiveNote, 
	deleteNote, 
	getNote, 
} from '../utils/local-data';
import NotFoundPage from './NotFoundPage';

function DetailPageWrapper() {
	const { id } = useParams();
	const navigate = useNavigate();
	
	return (
		<DetailPage 
			id={id} 
			navigate={navigate} 
		/>
	)
}

class DetailPage extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			note: getNote(props.id),
		}
	
		this.isNoteArchivedHandler = this.isNoteArchivedHandler.bind(this);
		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onEditHandler = this.onEditHandler.bind(this);
	}
	
	isNoteArchivedHandler(id) {
		if (this.state.note.archived) {
			unarchiveNote(id);
			this.props.navigate('/');
		} else if (!this.state.note.archived) {
			archiveNote(id);
			this.props.navigate('/');
		}
	}
	
	onDeleteHandler(id) {
		deleteNote(id);
		this.props.navigate('/');
	}
	
	onEditHandler(id) {
		this.props.navigate(`/notes/${id}/edit`)
	}

	render() {
		if (this.state.note) {
			return (
				<section className='detail-page'>
					<Link to='/'>
						<FaCircleArrowLeft /> Kembali
					</Link>
					<DetailPageBody note={this.state.note} />
					<DetailPageAction 
						id={this.props.id} 
						archived={this.state.note.archived} 
						isArchived={this.isNoteArchivedHandler} 
						onDelete={this.onDeleteHandler} 
						onEdit={this.onEditHandler} 
					/>
				</section>
			)
		} else {
			return (
				<NotFoundPage />
			)
		}
	}
}

DetailPage.propTypes = {
	id: PropTypes.string,
	navigate: PropTypes.func.isRequired,
}

export default DetailPageWrapper