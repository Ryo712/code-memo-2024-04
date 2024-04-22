// Sidebar.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Linkをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookOpen, faCheckDouble, faSearch } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Sidebar = () => {
  const navigation = [
    { name: 'Unread', icon: faBook }, // 未読アイコンを追加
    { name: 'Reading', icon: faBookOpen },
    { name: 'Read', icon: faCheckDouble },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksCollectionRef = collection(db, 'tasks');
      const querySnapshot = await getDocs(tasksCollectionRef);
      const tasksData = querySnapshot.docs.map((doc) => doc.data());
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  const handleSearch = async () => {
    const tasksCollectionRef = collection(db, 'tasks');
    let q;

    if (searchTerm.trim() === '') {
      q = query(tasksCollectionRef);
    } else {
      q = query(
        tasksCollectionRef,
        where('title', '>=', searchTerm),
        where('title', '<=', `${searchTerm}\uf8ff`)
      );
    }

    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => doc.data());
    setTasks(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );

  export default Sidebar;

  //eEffectフックは、コンポーネントがマウントされた直後に実行され、Firebase Firestoreからタスクデータを取得し、それをtasksステートに設定します。
  //searchTermステートは入力された検索語句を保持し、handleSearch関数はその語句を元にFirestoreから対応するタスクを取得し、結果をtasksステートに設定します。