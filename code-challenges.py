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
			
	def delete_node(self, node_to_delete):

		next_node = self.node_to_delete.next

		if next_node:
			node_to_delete.data = next_node.data
			node_to_delete.next = next_node.next
		else:
			raise Exception("Can't delete last node")

fruits = LinkedList()
fruits.add_node("apple")
fruits.add_node("berry")
fruits.add_node("cherry")
fruits.print_list()
fruits.delete_node("berry")
fruits.print_list()

def isHappy(n):
    """
    :type n: int
    :rtype: bool
    """
    nums_seen = set()
    while n != 1:
        sum = 0
        num_list = map(int,str(n))
        for num in num_list:
            num_pow = num ** 2
            sum += num_pow
        n = sum
        if num in nums_seen:
            return False
        else:  
            nums_seen.add(n)
    return True
isHappy(19)
isHappy(4)

