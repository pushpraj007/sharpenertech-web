function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get form values
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
  
    // Create an object with expense details
    const expenseDetails = {
        amount: amount,
        description: description,
        category: category
    };
  
    // Stringify the object before storing it in local storage
    localStorage.setItem(description, JSON.stringify(expenseDetails));
    showOnUserScreen(expenseDetails);
  }
  
  function showOnUserScreen(expenseDetails) {
    const parentElement = document.getElementById('listOfItems');
    const listItem = document.createElement('li');
    listItem.textContent = `Amount: ${expenseDetails.amount}, Description: ${expenseDetails.description}, Category: ${expenseDetails.category}`;
  
    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = 'Delete expense';
    deleteButton.onclick = () => {
        localStorage.removeItem(expenseDetails.description);
        parentElement.removeChild(listItem);
    };
  
    const editButton = document.createElement('input');
    editButton.type = "button";
    editButton.value = 'Edit expense';
    editButton.onclick = () => {
        localStorage.removeItem(expenseDetails.description);
        parentElement.removeChild(listItem);
        populateForm(expenseDetails);
    };
  
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    parentElement.appendChild(listItem);
  }
  
  function populateForm(expenseDetails) {
    document.getElementById('amount').value = expenseDetails.amount;
    document.getElementById('description').value = expenseDetails.description;
    document.getElementById('category').value = expenseDetails.category;
  }
  
  // Remove module.exports line as it's not necessary for browser usage
  