class Node(object):
	""" Node in Linked List """
	def __init__(self,data):
		self.data = data
		self.next = None


    def __repr__(self):
        return "<Node %s>" % self.data


class LinkedList(object):
	""" Linked list """

	def __init__(self):
		self.head = None
		self.tail = None


    def add_node(self, data):
        """Add node with data to end of list."""

        new_node = Node(data)

        if self.head is None:
            self.head = new_node

        if self.tail is not None:
            self.tail.next = new_node

        self.tail = new_node


	def print_list(self):
		"""print all items in list"""
		current = self.head

		while current != None:
			print current.data
			current = current.next
			



fruits = LinkedList()
fruits.add_node("apple")
fruits.add_node("berry")
fruits.add_node("cherry")
fruits.print_list()

