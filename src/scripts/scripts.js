

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
            console.error('Delete collection failed:', response.statusText);
        }
    } catch (error) {
        console.error('Delete collection error:', error);
    }
};



export async function checkRole() {
    try {
        const response = await fetch(`https://testt-zumv.onrender.com/api/collections/check_role`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ collectionName: localStorage.getItem('') }),
        });
        const result = await response.json();
        if (response.ok) {
            console.log(result)
        } else {
            console.error('UserRole not found:', response.statusText);
        }
    } catch (error) {
        console.error('UserRole error:', error);
    }
}