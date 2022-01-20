import React from 'react';
import styles from './index.module.css';

const Index = () => {
    console.log(styles, "test")
    return (
        <div className={styles.container}>

            <h1>Main Page</h1>
        </div>
    );

}

export default Index