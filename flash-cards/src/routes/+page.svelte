<title>Flash Cards</title>


<div class="container">
    <h1>Flash Cards</h1>
    <button class="btn" onclick="modal.style.display = 'block'">Create New Flashcard</button>
</div>


<!-- The Modal -->
<div id="modal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <span class="close" onclick="modal.style.display = 'none'">&times;</span>
        <form>
            <label for="modquestion">Question:</label>
            <br>
            <input type="text" id="modquestion" name="modquestion">
            <br>
            <br>
            <br>
        
            <label for="modanswer">Answer:</label>
            <br>
            <input type="text" id="modanswer" name="modanswer">
            <br>
            <button class="submit" type="submit">Submit</button>
          </form>
    </div>
</div>