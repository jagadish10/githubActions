from jira import JIRA
from confluence import Confluence

# Initialize Jira connection
jira = JIRA(server='https://taylorfrancis.atlassian.net', basic_auth=('jagadish.gowda@taylorandfrancis.com', 'ATATT3xFfGF0o5NlT9tUdmXIeNBDYtlYrW8pQSrl9FQYrbIQZboCqecHF4o0bMTqeBu4ZFuB-aN4V4XhqDEVzVaqkvgESDLkTik3IHLTDwtLRWkstMCYNmMTFZ3MSD2Dt_NMu6IpCwdKwYU8qagoXASFfQrm48sTFCpxKY6rl9JptfOckaDLH_8=BB55FCDE'))

# Initialize Confluence connection
confluence = Confluence(url='https://taylorfrancis.atlassian.net', username='jagadish.gowda@taylorandfrancis.com', password='ATATT3xFfGF0o5NlT9tUdmXIeNBDYtlYrW8pQSrl9FQYrbIQZboCqecHF4o0bMTqeBu4ZFuB-aN4V4XhqDEVzVaqkvgESDLkTik3IHLTDwtLRWkstMCYNmMTFZ3MSD2Dt_NMu6IpCwdKwYU8qagoXASFfQrm48sTFCpxKY6rl9JptfOckaDLH_8=BB55FCDE')

def fetch_jira_info():
    # Define the Jira ticket numbers you want to retrieve information for
    ticket_numbers = ['OAA-3419', 'OAA-2748', 'OAA-2747']

    jira_info = []

    for ticket_number in ticket_numbers:
        try:
            issue = jira.issue(ticket_number)

            # Access the required fields
            key = issue.key
            summary = issue.fields.summary
            issue_type = issue.fields.issuetype.name
            assignee = issue.fields.assignee.displayName
            priority = issue.fields.priority.name
            status = issue.fields.status.name

            jira_info.append([key, summary, issue_type, assignee, priority, status])

        except Exception as e:
            print(f"Failed to retrieve information for ticket {ticket_number}: {str(e)}")
    print(jira_info)
    return jira_info

def create_jira_table(data):
    # Define the table headers
    headers = ['Key', 'Summary', 'Type', 'Assignee', 'Priority', 'Status']

    # Generate the table markup
    table_markup = '{table}'
    table_markup += '{tr}'
    for header in headers:
        table_markup += f'{{th}}{header}{{th}}'
    table_markup += '{tr}'
    
    for row in data:
        table_markup += '{tr}'
        for field in row:
            table_markup += f'{{td}}{field}{{td}}'
        table_markup += '{tr}'
    table_markup += '{table}'

    return table_markup

def publish_to_confluence(data):
    # Create the Jira table markup
    table_markup = create_jira_table(data)

    # Specify the Confluence page details
    page_id = '3064103959'  # Replace with the actual page ID or customize the script to create a new page
    title = 'Jira Ticket Information'

    try:
        # Update the Confluence page with the Jira table
        confluence.update_page(page_id=page_id, title=title, body=table_markup)

        print(f"Jira ticket information published in Confluence.")

    except Exception as e:
        print(f"Failed to publish Jira ticket information in Confluence: {str(e)}")

# Fetch Jira information
jira_data = fetch_jira_info()

# Publish in Confluence
publish_to_confluence(jira_data)