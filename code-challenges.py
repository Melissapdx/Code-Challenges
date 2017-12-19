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
        #if removing head
		if self.head is not None and self.head.data == node_to_delete:
            self.head = self.head.next
            if self.head is None:
                self.tail = None
        #if removing something that's not head
        current = self.head
        while current.next is not None:

            #if node after head reassign next node
            if current.next.data == value:
                current.next = current.next.next
                if current.next is None:
                    self.tail = current
                return
            else: 
                current = current.next


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

def searchInsert(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    lower = 0
    upper = len(nums)-1

    if target < nums[0]:
        return 0

    if target > nums[len(nums)-1]:
        return len(nums)

    while lower <= upper:
        index = lower + (upper - lower)/ 2
        if nums[index] == target:
            return index
        elif nums[index] < target:
            lower = index + 1
        else: 
            upper = index - 1
    return lower
searchInsert([1,3,5,6],5)
searchInsert([1,3,5,6],2)