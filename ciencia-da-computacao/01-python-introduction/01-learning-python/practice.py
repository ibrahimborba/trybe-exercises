def highest_number(n1, n2):
    return max([n1, n2])


def mean(numbers):
    count = 0
    for number in numbers:
        count += number

    return count / len(numbers)


def longest_name(names):
    name_len = [len(name) for name in names]
    highest_len = max(name_len)
    return names[name_len.index(highest_len)]


print("Highest number: ", highest_number(1, 5))
print("Calculate mean: ", mean([1, 2, 3, 4]))
print(
    "Longest name: ",
    longest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]),
)
