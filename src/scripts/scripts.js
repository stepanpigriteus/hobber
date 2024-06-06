

export const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };


export const handleDelete = async () => {
    try {
        const response = await fetch(`https://testt-zumv.onrender.com/api/collections/delete_collection`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ collectionName: localStorage.getItem('collectionName') }),
        });
        const result = await response.json();
        if (response.ok) {
            console.log(result)
        } else {
            // Обработка ошибки удаления
            console.error('Delete collection failed:', response.statusText);
        }
    } catch (error) {
        console.error('Delete collection error:', error);
    }
};
