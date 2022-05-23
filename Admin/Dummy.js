import React from 'react'
import Table from 'react-tailwind-table'
import 'react-tailwind-table/dist/index.css' //use for a non tailwind project


class Dummy extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            columns: column(),
            rows: fakePlayers()
        }
    }


    rowcheck = (row, column, display_value) => {

        if (column.field === "created_at") {
            return <button className="border p-2">See button</button>
        }

        if (column.field === "name") {
            return <b>{display_value}</b>
        }

        return display_value
    }

    render() {
        return <Table columns={this.state.columns} rows={this.state.rows} per_page={5} table_header="Test Table" row_render={this.rowcheck} />
    }
}

function column() {
    return [
        {
            field: "front_end_position.name",
            use: "Position"
        },
        {
            // use_in_display: false,
            field: "name", //Object destructure
            use: "Name"
        },

        {
            field: "created_at",
            use: "Action",
            // use_in_search:false
        }]
}

function fakePlayers() {

    return [{
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        position_id: 1,
        shirt_number: "10",
        created_by: 2,
        deleted_at: null,
        created_at: "12/12/12 15:00:00",
        updated_at: "12/12/12 15:00:00",
        is_defender: false,
        is_midfielder: false,
        is_forward: true,
        is_goalkeeper: false,
        front_end_position: {
            name: "attach",
            id: 2
        }
    },
    {
        id: 2,
        name: "Mohammed Sala",
        country_id: 3,
        club_id: 2,
        position_id: 1,
        shirt_number: "11",
        created_by: 2,
        deleted_at: null,
        created_at: "12/12/12 15:00:00",
        updated_at: "12/12/12 15:00:00",
        is_defender: false,
        is_midfielder: false,
        is_forward: true,
        is_goalkeeper: false,
        front_end_position: {
            name: "Forward",
            id: 4
        }
    },
    {
        id: 3,
        name: "Robertor Fermino",
        country_id: 3,
        club_id: 2,
        position_id: 1,
        shirt_number: "8",
        created_by: 2,
        deleted_at: null,
        created_at: "12/12/12 15:00:00",
        updated_at: "12/12/12 15:00:00",
        is_defender: false,
        is_midfielder: false,
        is_forward: true,
        is_goalkeeper: false,
        front_end_position: {
            name: "Defence",
            id: 9
        },
    },
    {
        id: 3,
        name: "Robertor Fermino",
        country_id: 3,
        club_id: 2,
        position_id: 1,
        shirt_number: "8",
        created_by: 2,
        deleted_at: null,
        created_at: "12/12/12 15:00:00",
        updated_at: "12/12/12 15:00:00",
        is_defender: false,
        is_midfielder: false,
        is_forward: true,
        is_goalkeeper: false,
        front_end_position: {
            name: "Defence",
            id: 9
        },
    },
    {
        id: 3,
        name: "Robertor Fermino",
        country_id: 3,
        club_id: 2,
        position_id: 1,
        shirt_number: "8",
        created_by: 2,
        deleted_at: null,
        created_at: "12/12/12 15:00:00",
        updated_at: "12/12/12 15:00:00",
        is_defender: false,
        is_midfielder: false,
        is_forward: true,
        is_goalkeeper: false,
        front_end_position: {
            name: "Defence",
            id: 9
        },
    },
    {
        id: 3,
        name: "Robertor Fermino",
        country_id: 3,
        club_id: 2,
        position_id: 1,
        shirt_number: "8",
        created_by: 2,
        deleted_at: null,
        created_at: "12/12/12 15:00:00",
        updated_at: "12/12/12 15:00:00",
        is_defender: false,
        is_midfielder: false,
        is_forward: true,
        is_goalkeeper: false,
        front_end_position: {
            name: "Defence",
            id: 9
        },
    },
    {
        id: 3,
        name: "Robertor Fermino",
        country_id: 3,
        club_id: 2,
        position_id: 1,
        shirt_number: "8",
        created_by: 2,
        deleted_at: null,
        created_at: "12/12/12 15:00:00",
        updated_at: "12/12/12 15:00:00",
        is_defender: false,
        is_midfielder: false,
        is_forward: true,
        is_goalkeeper: false,
        front_end_position: {
            name: "Defence",
            id: 9
        },
    },
    {
        id: 3,
        name: "Robertor Fermino",
        country_id: 3,
        club_id: 2,
        position_id: 1,
        shirt_number: "8",
        created_by: 2,
        deleted_at: null,
        created_at: "12/12/12 15:00:00",
        updated_at: "12/12/12 15:00:00",
        is_defender: false,
        is_midfielder: false,
        is_forward: true,
        is_goalkeeper: false,
        front_end_position: {
            name: "Defence",
            id: 9
        },
    },
    {
        id: 3,
        name: "Robertor Fermino",
        country_id: 3,
        club_id: 2,
        position_id: 1,
        shirt_number: "8",
        created_by: 2,
        deleted_at: null,
        created_at: "12/12/12 15:00:00",
        updated_at: "12/12/12 15:00:00",
        is_defender: false,
        is_midfielder: false,
        is_forward: true,
        is_goalkeeper: false,
        front_end_position: {
            name: "Defence",
            id: 9
        },
    },
    {
        id: 3,
        name: "Robertor Fermino",
        country_id: 3,
        club_id: 2,
        position_id: 1,
        shirt_number: "8",
        created_by: 2,
        deleted_at: null,
        created_at: "12/12/12 15:00:00",
        updated_at: "12/12/12 15:00:00",
        is_defender: false,
        is_midfielder: false,
        is_forward: true,
        is_goalkeeper: false,
        front_end_position: {
            name: "Defence",
            id: 9
        },
    },
    {
        id: 3,
        name: "Robertor Fermino",
        country_id: 3,
        club_id: 2,
        position_id: 1,
        shirt_number: "8",
        created_by: 2,
        deleted_at: null,
        created_at: "12/12/12 15:00:00",
        updated_at: "12/12/12 15:00:00",
        is_defender: false,
        is_midfielder: false,
        is_forward: true,
        is_goalkeeper: false,
        front_end_position: {
            name: "Defence",
            id: 9
        },
    },
    {
        id: 3,
        name: "Robertor Fermino",
        country_id: 3,
        club_id: 2,
        position_id: 1,
        shirt_number: "8",
        created_by: 2,
        deleted_at: null,
        created_at: "12/12/12 15:00:00",
        updated_at: "12/12/12 15:00:00",
        is_defender: false,
        is_midfielder: false,
        is_forward: true,
        is_goalkeeper: false,
        front_end_position: {
            name: "Defence",
            id: 9
        }
    }];
}


export default Dummy