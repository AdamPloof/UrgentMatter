import React from "react";

export default function QueueTable(props) {
    return (
        <table className="table table-borderless queue-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Key</th>
                    <th scope="col">Summary</th>
                    <th scope="col">Reporter</th>
                    <th scope="col">Assignee</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created</th>
                    <th scope="col">Urgency</th>
                    <th scope="col">SLA</th>
                </tr>
            </thead>
        <tbody>
            <tr>
                <th scope="row">ASD</th>
                <td>UM-123</td>
                <td>Can't SE OR DT?!</td>
                <td>Mr Purdy</td>
                <td>JBergeron</td>
                <td>Ready</td>
                <td>12/20/1984</td>
                <td>Very urgent</td>
                <td>Breached</td>
            </tr>
            <tr>
                <th scope="row">ASD</th>
                <td>UM-124</td>
                <td>PRinter not printering</td>
                <td>JLo</td>
                <td>Jbergeron</td>
                <td>Ignored</td>
                <td>12/24/1985</td>
                <td>Not very</td>
                <td>Good</td>
            </tr>
            <tr>
                <th scope="row">ASD</th>
                <td>UM-125</td>
                <td>Order more pens</td>
                <td>Jairo</td>
                <td>Jbergeron</td>
                <td>On fire</td>
                <td>12/28/1998</td>
                <td>Over the top urgent</td>
                <td>Breached</td>
            </tr>
        </tbody>
        </table>
    );
}
