import React from 'react';
import { connect } from 'react-redux';
import styles from './News.module.css';
import { receiveNews } from './../../redux/news-reducer';
import New from './New/New';
import { reduxForm } from 'redux-form';
import { createField, Input } from './../common/FormControls/FormControls';

const NewSearchForm = ({handleSubmit, ...restProps}) => {
    return <form onSubmit={handleSubmit}>
        {createField("What're you looking for...", "searchKey", [], Input, "text")}
        <button>Search</button>
    </form>
}

const NewSearchReduxForm = reduxForm({form: "NewSearch"})(NewSearchForm);

//Новости приходят по слову биткоин, создать систему поиска и вывода с маппингои новостных статей, доработать UI
const News = (props) => {
    
    
    const onSubmit = (payload) => {
        props.receiveNews(payload.searchKey);
    }

    
    return (
        <div className={styles.content}>
            <NewSearchReduxForm onSubmit={onSubmit}/>
            {props.news && <div className={styles.new}>{props.news.map(n => {
                return <New key={n.source.id} {...n} />;
            })}</div>}
        </div>
    )
};

const mapStateToProps = (state) => {
    
    return {
        news: state.news.newsArray
    };
};
export default connect(mapStateToProps, { receiveNews })(News);