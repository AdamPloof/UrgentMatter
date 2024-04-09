import json
from typing import TypeAlias

"""
A utility for doing stuff with the faux ticket file.
"""
Ticket: TypeAlias = dict[str, str|int]

def add_ids(tickets: list[Ticket]) -> list[Ticket]:
    id = 4102
    for ticket in tickets:
        ticket['id'] = id
        id += 1

    return tickets


def main():
    with open('../var/data/faux_tickets.json', 'r') as f:
        tickets = json.load(f)
    
    tickets = add_ids(tickets)

    with open('../var/data/faux_tickets.json', 'w') as out:
        json.dump(tickets, out, indent=4)


if __name__ == '__main__':
    main()
