#!/usr/bin/env python3
"""Module that provides a measure_time function."""

import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measure the total execution time for wait_n and return average per coroutine.

    Args:
        n: Number of coroutines to spawn
        max_delay: Maximum delay for each coroutine

    Returns:
        Total execution time divided by n as a float
    """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    total_time = end - start
    return total_time / n
