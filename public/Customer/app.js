var customerData = [
    {   
        id:1,
        name: "Rayyan",
        fatherName:"Fazal Iqbal",
        status: "Active",
        fees: "Paid"
    },
    {   
        id:2,
        name: "Ahmed",
        fatherName:"Mushtaq Khan",
        status: "Active",
        fees: "Paid"
    },
    {   
        id:3,
        name: "Hasan",
        fatherName:"Iqbal Khan",
        status: "InActive",
        fees: "not Paid"
    },
    {   
        id:4,
        name: "Wahab",
        fatherName:"Sher Ali",
        status: "Active",
        fees: "Paid"
    },
    {   
        id:5,
        name: "Ali",
        fatherName:"Mansoor Khan",
        status: "InActive",
        fees: "not Paid"
    },
    {   
        id:6,
        name: "Hamza",
        fatherName:"Rehman",
        status: "Active",
        fees: "Paid"
    },
    {   
        id:7,
        name: "Musa",
        fatherName:"Arsalan",
        status: "Active",
        fees: "Paid"
    },
];

var k = '<tbody>'
for(i = 0;i < customerData.length; i++){
    k+= '<tr>';
    k+= '<td>' + customerData[i].id + '</td>';
    k+= '<td>' + customerData[i].name + '</td>';
    k+= '<td>' + customerData[i].fatherName + '</td>';
    k+= '<td>' + customerData[i].status + '</td>';
    k+= '<td>' + customerData[i].fees + '</td>';
    k+= '</tr>';
}
k+='</tbody>';
document.getElementById('tableData').innerHTML = k;