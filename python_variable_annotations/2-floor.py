#!/usr/bin/env python3
"""Module that provides a floor function with type annotations."""
import math


def floor(n: float) -> int:
    """Return the floor of a float as an integer.

    Args:
        n: A float number

    Returns:
        The floor of n as an integer
    """
    return math.floor(n)
