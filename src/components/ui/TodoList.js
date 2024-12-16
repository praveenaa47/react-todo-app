import React from 'react';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import { applyFilter, search, FILTER_ACTIVE } from '../../services/filter';

export default function TodoList(props) {
    const { list, filter, mode, query } = props.data;
    const { addNew, changeFilter, changeStatus, changeMode, setSearchQuery } = props.actions;
    const activeItemCount = applyFilter(list, FILTER_ACTIVE).length;

    const sortedItems = search(applyFilter(list, filter), query).sort((a, b) => {
        const dateA = new Date(a.dueDate || '9999-12-31'); 
        const dateB = new Date(b.dueDate || '9999-12-31');
        if (dateA - dateB !== 0) {
            return dateA - dateB; 
        }

      
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority || 'Medium'] - priorityOrder[b.priority || 'Medium'];
    });

    return (
        <div className="container">
            <div className="row">
                <div className="todolist">
                    <Header {...{ addNew, mode, query, setSearchQuery }} />
                    <FilteredList items={sortedItems} changeStatus={changeStatus} />
                    <Footer {...{ activeItemCount, filter, changeFilter, mode, changeMode }} />
                    <Info {...{ mode }} />
                </div>
            </div>
        </div>
    );
}