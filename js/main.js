new Vue({
    el: "#app",
    editValue:'',
    data:{
        currentNote: '',
        notes: [
            {
                text: 'awdada',
                isCompleted: false,
                isEditing: false
            },

            {
                text: 'adfgdf',
                isCompleted: false,
                isEditing: false
            }
    ]
    },
    methods:
        {
            addNote: function(){
                this.notes.push({
                    text: this.currentNote,
                    isCompleted: false

                });
                this.currentNote='';
            },
            removeNote: function(noteText){
                this.notes = this.notes.filter(note => {
                    return note.text !== noteText;
                })

            },
            changeEditing: function (noteText) {
                this.editValue = noteText;
                this.notes = this.notes.map(
                    note => {
                        if(note.text === noteText){
                            note.isEditing = !note.isEditing;
                        }
                        return note;
                    })
            },
            editNote: function (noteText){
                this.notes = this.notes.map(note =>{
                    if(note.text === noteText){
                        note.isEditing = !note.isEditing;
                        note.text = this.editValue;
                    }
                    return note;
                })
            }
        }
})