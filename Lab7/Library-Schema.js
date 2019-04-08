Borrows - Schema Design:
{
    _id: ObjectID(),
        bookid: [{ bookid: 1, ISBN: "SN0001", author: "Author1", tag: "This is a demo" }],
            checklibrarian: [
                { librarianuser: "libuser1", checkdate: "dateTime" },
                { librarianuser: "libuser2", checkdate: "dateTime" }
            ],
                isreturn: [
                    { byStudentid: "user1", returndate: "dateTime", duedate: "dateTime" },
                    {
                        byStudentid: "user1", returndate: "dateTime", duedate: "", contact: [
                            { contactid: "1", date: "dateTime", libuser: "", title: "", text: "" }
                        ]
                    },
                ]
}

Books - Schema Design:
{
    bookid: 1,
        ISBN: "SN0001",
        author: "Author1",
        keyword: "This is a keyword",
        borrows: [{
                    checklibrarian:
                                [{
                                    librarianuser: "libuser1",
                                    checkdate: "dateTime"
                                }],
                    isreturn:
                                [{
                                    byStudentid: "user1",
                                    returndate: "dateTime",
                                    duedate: "", 
                                    contact: [
                                        { contactid: "1", date: "dateTime", libuser: "", title: "", text: "" }
                                    ]
                                }
                }]
}

Category:
[
    { catid: '1', name: 'Category1' },
    { catid: '2', name: 'Category2' },
    { catid: '3', name: 'Category3' }
]

Book:
[
    { bookid: 1, ISBN: "SN0001", category: "", author: "Author1", keyword: "This is a demo"},
    { bookid: 2, ISBN: "SN0002", category: "", author: "Author2", keyword: "This is a tag"},
    { bookid: 3, ISBN: "SN0003", category: "", author: "Author3", keyword: "This is 2"},
    { bookid: 4, ISBN: "SN0004", category: "", author: "Author4", keyword: "This is 4"}
]

User:
[
    { user: 1, name: "Student", email: "", cellphone: "1111111", type: "librarian" },
    { user: 2, name: "Librarian", email: "", cellphone: "1111111", type: "student" }
]


Borrow:
[
    { borrowid: "1", bookid: "1", byStudent: "1", checklibrarian: "2", returndate: "", isreturn: 1 },
    { borrowid: "1", bookid: "2", byStudent: "1", checklibrarian: "2", returndate: "", isreturn: 0 },
]



