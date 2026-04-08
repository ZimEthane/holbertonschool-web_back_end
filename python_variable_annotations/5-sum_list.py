#!/usr/bin/env python3
"""Module that provides a sum_list function with type annotations."""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return the sum of a list of floats.

    Args:
        input_list: A list of float numbers

    Returns:
        The sum of all elements in input_list as a float
    """
    return sum(input_list)
