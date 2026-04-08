#!/usr/bin/env python3
"""Module that provides a sum_mixed_list function with type annotations."""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of a mixed list of integers and floats.

    Args:
        mxd_lst: A list of integers and floats

    Returns:
        The sum of all elements in mxd_lst as a float
    """
    return sum(mxd_lst)
