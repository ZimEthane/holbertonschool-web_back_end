#!/usr/bin/env python3
"""Module that provides a to_kv function with type annotations."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple of a string key and the square of its value.

    Args:
        k: A string key
        v: An integer or float value

    Returns:
        A tuple of k and the square of v as a float
    """
    return (k, float(v ** 2))
